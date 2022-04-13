import { Injectable } from '@nestjs/common';
import { CreateCallListDto, UpdateCallListDto } from '../../../core/dtos';
import { CallList } from '../../../core/entities';

// import { createCipheriv, randomBytes, scrypt } from 'crypto';
// import { promisify } from 'util';
// import environment from 'src/environment/environment';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class CallListFactoryService {
  createNewCallList(createCallListDto: CreateCallListDto) {
    const newCallList = new CallList();
    newCallList.description = createCallListDto.description;
    newCallList.fromCompanyName = createCallListDto.fromCompanyName;
    newCallList.fromUserGsm = createCallListDto.fromUserGsm;
    newCallList.fromUserId = createCallListDto.fromUserId;
    newCallList.fromUserName = createCallListDto.fromUserName;
    newCallList.isActive = createCallListDto.isActive;
    newCallList.status = createCallListDto.status;
    newCallList.title = createCallListDto.title;
    newCallList.toCompanyName = createCallListDto.toCompanyName;
    newCallList.toUserGsm = createCallListDto.toUserGsm;
    newCallList.toUserId = createCallListDto.toUserId;
    newCallList.toUserName = createCallListDto.toUserName;
    newCallList.whyContent = createCallListDto.whyContent;


    return newCallList;
  }

  updateCallList(updateCallListDto: UpdateCallListDto) {
    const newCallList = new CallList();
    newCallList.description = updateCallListDto.description;
    newCallList.fromCompanyName = updateCallListDto.fromCompanyName;
    newCallList.fromUserGsm = updateCallListDto.fromUserGsm;
    newCallList.fromUserId = updateCallListDto.fromUserId;
    newCallList.fromUserName = updateCallListDto.fromUserName;
    newCallList.isActive = updateCallListDto.isActive;
    newCallList.status = updateCallListDto.status;
    newCallList.title = updateCallListDto.title;
    newCallList.toCompanyName = updateCallListDto.toCompanyName;
    newCallList.toUserGsm = updateCallListDto.toUserGsm;
    newCallList.toUserId = updateCallListDto.toUserId;
    newCallList.toUserName = updateCallListDto.toUserName;
    newCallList.whyContent = updateCallListDto.whyContent;
    return newCallList;
  }
}
