import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TemplateService } from './template.service';
import { Template } from './template.entity';
import { CreateTemplateDto } from './template.dto';

@Controller('templates')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Get()
  findAll(): Promise<Template[]> {
    return this.templateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Template> {
    return this.templateService.findOne(id);
  }

  @Post()
  create(@Body() createTemplateDto: CreateTemplateDto): Promise<Template> {
    return this.templateService.create(createTemplateDto);
  }
}
