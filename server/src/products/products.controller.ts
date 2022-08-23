import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Product } from './entities/product.entity';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  
  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({ status: 200, type: Product })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @ApiOperation({ summary: 'Get all product' })
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  findAll() {
    return this.productsService.findAll();
  }


  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({ status: 200, type: [Product] })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update by id' })
  @ApiResponse({ status: 200, type: Product })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }


  @ApiOperation({ summary: 'Delete by id' })
  @ApiResponse({ status: 200 })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }


  @ApiOperation({ summary: 'Add image' })
  @UseInterceptors(FileInterceptor('image'))
  @Patch('/addImage/:id')
  addImage(@Param('id') id: string,  @UploadedFile() image){
    return this.productsService.addImage(id, image)
  }
}
