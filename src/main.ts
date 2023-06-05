import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const proxy = createProxyMiddleware('/api', {
    target: 'http://45.77.255.150:3000', // Thay thế bằng địa chỉ proxy của bạn
    changeOrigin: true,
    pathRewrite: {
      '^/api': '', // Tùy chỉnh đường dẫn tới proxy nếu cần thiết
    },
  });

  app.use('/api', proxy);

  await app.listen(3000);
}
bootstrap();
