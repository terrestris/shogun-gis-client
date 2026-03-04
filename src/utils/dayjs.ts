import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export type { Dayjs } from 'dayjs';
export default dayjs;
