import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(alldishes: [], searchkey: string, propname: string): any[] {
    const result:any=[]
    

    if (!alldishes || searchkey == '' || propname == '')
    { return alldishes; }

    alldishes.forEach((dishes: any) => {
      if (dishes[propname].trim().toLowerCase().includes(searchkey.toLowerCase())) {
        result.push();
      }
    })
    


    return result;
  }

}
