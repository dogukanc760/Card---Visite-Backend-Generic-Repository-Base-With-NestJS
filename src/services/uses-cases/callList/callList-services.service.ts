import { Injectable } from '@nestjs/common';
import { CallList } from '../../../core/entities';
import { IDataService } from '../../../core/abstracts';
import { CallListFactoryService } from './callList-factory.service';
import { CreateCallListDto, UpdateCallListDto } from 'src/core/dtos';

@Injectable()
export class CallListServices {
  constructor(
    private dataServices: IDataService,
    private callListFactoryService: CallListFactoryService,
  ) {}

  getAllCallList(): Promise<CallList[]> {
    return this.dataServices.calls.getAll();
  }

  async getCallListByUser(id: any): Promise<CallList[]> {
    const calls = (await this.dataServices.calls.getAll()).filter(
      (x) => x.fromUserId == id || x.toUserId == id,
    );
    return calls;
  }

  getCallListById(id: any): Promise<CallList> {
    return this.dataServices.calls.get(id);
  }

  createCall(createCallListDto: CreateCallListDto): Promise<CallList> {
    try {
      const calls =
        this.callListFactoryService.createNewCallList(createCallListDto);
      return this.dataServices.calls.create(calls);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  updateCall(
    callId: string,
    updateCallDto: UpdateCallListDto,
  ): Promise<CallList> {
    const calls = this.callListFactoryService.updateCallList(updateCallDto);
    return this.dataServices.calls.update(callId, calls);
  }
}
