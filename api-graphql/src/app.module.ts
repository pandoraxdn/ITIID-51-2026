import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import {HelloWorldModule} from './hello-world/hello-world.module';
import {join} from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      //playground: false
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    HelloWorldModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
