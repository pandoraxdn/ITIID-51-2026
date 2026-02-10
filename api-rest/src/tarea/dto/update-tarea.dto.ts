import {IsNumber, IsOptional, IsString, MaxLength, MinLength} from "class-validator";

export class UpdateTareaDto {
  @IsString()
  @MaxLength(255)
  @MinLength(5)
  @IsOptional()
  nombre: string;

  @IsString()
  @MaxLength(255)
  @MinLength(5)
  @IsOptional()
  materia: string;

  @IsString()
  @MaxLength(255)
  @MinLength(5)
  @IsOptional()
  fecha: string;

  @IsNumber()
  @IsOptional()
  prioridad: number;
}
