import { Module } from '@nestjs/common';
import { AuthModele } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthModele, UserModule, BookmarkModule],
})
export class AppModule {}
