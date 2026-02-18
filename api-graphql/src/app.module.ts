import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
//import {HelloWorldModule} from './hello-world/hello-world.module';
import {join} from 'path';
//import {TodoModule} from './todo/todo.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {SistemaEscolarModule} from './sistema-escolar/sistema-escolar.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      //playground: false
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      database: "escuela_dsm51",
      username: "najimi",
      password: "pass",
      synchronize: true,
      autoLoadEntities: true
    }),
    SistemaEscolarModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
