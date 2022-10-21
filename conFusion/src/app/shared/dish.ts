import { Comment } from './comment';


//definition of our class Dish

export class Dish {
  id: number;
  daycare_name: string;
  daycare_type: string;
  daycare_licensee_name: string;
  daycare_address: string;
  daycare_phone: string;
  daycare_days_hours_of_operation: string;
  daycare_website: string;
  daycare_languages_of_operation: string;
  daycare_in_public_catholic_school: string;
  daycare_in_private_school: string;
  daycare_licensed_since: string;
  daycare_capacity_by_age: string;
  daycare_license_type: string;
  daycare_inspection_information: string;
  daycare_conditions_on_licence: string;
  daycare_additional_approvals: string;
  daycare_image: string;
  comments: Comment[];

}
