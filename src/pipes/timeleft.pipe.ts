import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeleft'
})
export class TimeleftPipe implements PipeTransform {

  // for knowing timeleft
  transform(value: Date): string {
      const currentTime = new Date();  //give date now
      const diff = currentTime.getTime() - value.getTime();  // its in ms
      const y = Math.floor(diff/1000/60/60/24/365);
      if(y>0) return y + ' year'
      const m = Math.floor((diff/1000/60/60/24) % 12);
      if (m>0) return m + ' month';
      const d = Math.floor(diff/1000/60/60/24);
      if (d>0) return d + ' day';
      const h = Math.floor((diff/1000/60/60) % 24);
      if (h>0) return h + ' hour';
      const min = Math.floor((diff/1000/60) % 60);
      if (min>0) return min + ' min';
      const s = Math.floor((diff/1000) % 60);
      if (s>0) return s + ' s';
       return '1s';
  }

}
