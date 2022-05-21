import {Customer} from './customer';
import {Home} from './home';

export interface Contract {
    maHopDong?: string;
  Customer? : Customer;
  Home?: Home;
  ngayLamHopDong?: string;
  ngayKetThucHopDong?: string;
  tienDatCoc?: number;

}
