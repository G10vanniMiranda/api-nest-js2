import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';

export interface UpdateProdutoDto extends Partial<CreateProdutoDto> {
    id: number
}