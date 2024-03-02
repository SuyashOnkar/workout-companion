import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto, LoginUserDto } from './auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await User.createUser(
      createUserDto.username,
      createUserDto.email,
      createUserDto.password
    );
    return await this.userRepository.save(newUser);
  }

  async login(loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const { email, password } = loginUserDto;

    const user = await this.userRepository.findOne({ where: { email: email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // If user found and password matches, generate JWT token
    const accessToken = this.jwtService.sign({ email: user.email, id: user.id });

    return { accessToken };
  }
}
