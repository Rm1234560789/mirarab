package com.example.backend.controller;

import com.example.backend.entity.Manaviyat_rukni;
import com.example.backend.repo.ManaviyatRukni;
import jakarta.servlet.ServletOutputStream;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@RestController
@RequestMapping("/api/files")
public class FileController {
    @Autowired
    ManaviyatRukni manaviyatRukniRepo;

    private static final String UPLOAD_DIR = "backend/files/e_video/";
    private static final String IMAGE_UPLOAD_DIR = "backend/files/img/";

    @PostMapping("/img")
    public String saveProductImg(@RequestParam MultipartFile file) throws IOException {
        String name = UUID.randomUUID() + file.getOriginalFilename();
        FileOutputStream fileOutputStream = new FileOutputStream(IMAGE_UPLOAD_DIR + name);
        fileOutputStream.write(file.getBytes());
        fileOutputStream.close();
        return name;
    }

    @GetMapping("/img")
    public void getImg(HttpServletResponse response, @RequestParam String name) throws IOException {
        FileInputStream fileInputStream = new FileInputStream(IMAGE_UPLOAD_DIR + name);
        ServletOutputStream outputStream = response.getOutputStream();
        fileInputStream.transferTo(outputStream);
        outputStream.close();
        fileInputStream.close();
    }

    @PostMapping("/video")
    public ResponseEntity<String> uploadVideo(@RequestParam("file") MultipartFile file) {
        try {
            File uploadDir = new File(UPLOAD_DIR);
            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }
            String fileName = UUID.randomUUID() + file.getOriginalFilename();
            Path filePath = Paths.get(UPLOAD_DIR, fileName);
            Files.copy(file.getInputStream(), filePath);

            return ResponseEntity.ok(fileName);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File upload failed");
        }
    }

    @GetMapping("/video")
    public void getVideo(@RequestParam String name, HttpServletRequest request, HttpServletResponse response) throws IOException {
        File videoFile = new File("backend/files/e_video/" + name);
        if (!videoFile.exists()) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        String range = request.getHeader("Range");
        if (range == null) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        long fileLength = videoFile.length();
        long start = 0;
        long end = fileLength - 1;

        String[] ranges = range.split("=")[1].split("-");
        try {
            if (ranges.length > 0 && !ranges[0].isEmpty()) {
                start = Long.parseLong(ranges[0]);
            }
            if (ranges.length > 1 && !ranges[1].isEmpty()) {
                end = Long.parseLong(ranges[1]);
            }
        } catch (NumberFormatException e) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        if (start > end || start >= fileLength) {
            response.setStatus(HttpServletResponse.SC_REQUESTED_RANGE_NOT_SATISFIABLE);
            return;
        }

        long contentLength = end - start + 1;
        response.setStatus(HttpServletResponse.SC_PARTIAL_CONTENT);
        response.setContentType("video/mp4");
        response.setHeader("Accept-Ranges", "bytes");
        response.setHeader("Content-Range", "bytes " + start + "-" + end + "/" + fileLength);
        response.setHeader("Content-Length", String.valueOf(contentLength));

        try (RandomAccessFile raf = new RandomAccessFile(videoFile, "r")) {
            raf.seek(start);
            byte[] buffer = new byte[4096];
            long bytesToRead = contentLength;
            OutputStream os = response.getOutputStream();
            while (bytesToRead > 0) {
                int bytesRead = raf.read(buffer, 0, (int) Math.min(buffer.length, bytesToRead));
                if (bytesRead == -1) {
                    break;
                }
                os.write(buffer, 0, bytesRead);
                bytesToRead -= bytesRead;
            }
            os.flush();
        }
    }
//
//    @GetMapping("/video")
//    public HttpEntity<?> getFileByName(@RequestParam String name, HttpServletResponse response) throws IOException {
//
//        FileInputStream inputStream = new FileInputStream("backend/files/e_video/" + name);
//        ServletOutputStream outputStream = response.getOutputStream();
//        inputStream.transferTo(outputStream);
//        outputStream.close();
//        inputStream.close();
//        return ResponseEntity.status(HttpStatus.OK).body(outputStream);
//    }

    @GetMapping("/img/pdf")
    public void getImgPdf(HttpServletResponse response) throws IOException {
        FileInputStream fileInputStream = new FileInputStream(IMAGE_UPLOAD_DIR + "Frame.png");
        ServletOutputStream outputStream = response.getOutputStream();
        fileInputStream.transferTo(outputStream);
        fileInputStream.close();
        outputStream.close();
    }
    @GetMapping("/pdf/{id}")
    public ResponseEntity<InputStreamResource> getPdfFile(@PathVariable UUID id) {
        File file = getFileById(id);

        if (file == null) {
            return ResponseEntity.notFound().build();
        }

        try {
            InputStreamResource resource = new InputStreamResource(new FileInputStream(file));

            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment;filename=" + file.getName())
                    .contentType(MediaType.APPLICATION_PDF)
                    .contentLength(file.length())
                    .body(resource);

        } catch (FileNotFoundException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    private File getFileById(UUID id) {
        Manaviyat_rukni manaviyatRukni = manaviyatRukniRepo.findById(id).orElseThrow();
        return new File("backend/files/img/"+manaviyatRukni.getImg());
    }

}
