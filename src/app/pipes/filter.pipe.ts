import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcontacts: any [], searchKey:string,propName:string): any [] {
    const result:any = []
    if(!allcontacts || searchKey=='' || propName==''){
      return allcontacts
    }
    allcontacts.forEach((contact:any)=>{
      if(contact[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(contact)
      }
    })
    return result;
  }

}
