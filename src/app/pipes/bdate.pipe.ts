import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bdate',
  standalone: false,
})
export class BdatePipe implements PipeTransform {
  transform(date: Date | string): string {
    const input_date = new Date(date);
    let day = input_date.getDate();
    let month: number | string = input_date.getMonth();
    if (month == 0) month = 'มกราคม';
    else if (month == 1) month = 'กุมภาพันธ์';
    else if (month == 2) month = 'มีนาคม';
    else if (month == 3) month = 'เมษายน';
    else if (month == 4) month = 'พฤษภาคม';
    else if (month == 5) month = 'มิถุนายน';
    else if (month == 6) month = 'กรกฎาคม';
    else if (month == 7) month = 'สิงหาคม';
    else if (month == 8) month = 'กันยายน';
    else if (month == 9) month = 'ตุลาคม';
    else if (month == 10) month = 'พฤศจิกายน';
    else if (month == 11) month = 'ธันวาคม';
    let year = input_date.getFullYear() + 543;
    return day + ' ' + month + ' ' + year;
  }
}
