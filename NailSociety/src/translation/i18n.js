import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const resources = {
  eng: {
    translation: {
      about: 'About',
      nav_academy: 'The Academy',
      nav_members: 'Members',
      nav_statutes: 'Statutes',
      nav_reports: 'Annual reports',
      nav_events: 'Events',
      nav_blogs: 'Scientific blogs',
      nav_patients: 'Patients',
      home_title: 'GNRS history',
      home_1_paragraph: 'The Georgian Nail Research Society is a non-profit organization founded in 2023, dedicated to advancing the study and understanding of nail health, disorders, and care.',
      home_2_paragraph: 'Our mission is to promote research, education, and awareness in the field of nail science by collaborating with healthcare professionals, researchers, and the public. Through fostering innovation and sharing knowledge, we aim to improve nail care practices and contribute to the overall well-being of people of Georgia.',
      values: 'Our values',
      collaborative_title: 'Collaborative',
      collaborative_description: 'We believe in working together, capitalising on one another’s knowledge and expertise for the benefit of all.',
      progressive_title: 'Progressive',
      progressive_description: 'We are always looking to improve, encouraging each other to change the way things are done for the better.',
      inclusive_title: 'Inclusive',
      inclusive_description: 'We maintain that everybody has something to contribute, involving as many people as possible to maximise impact.',
      trusted_title: 'Trusted',
      trusted_description: 'We are professional, only sharing scientifically sound advancements so our members can move forward with confidence.',
      members: 'Board Members',
      events_paragraph: 'GNRS events are a great opportunity to experience first-hand the outstanding scientific content from top speakers in the field. Networking is also a great part of GNRS’s events; come meet up with doctors, professors, and industry leaders from around the world.',
      events_latest: 'Latest GNRS',
      events_click: 'Click a box to view the',
      events_highlit: 'highlights.',
      events_previous: 'Previous',
      events_symposium: 'symposium',
      events_congress: 'congress',
      blogs_1_paragraph: 'The GNRS scientific blog contains a selection of news and articles prepared by experts in different fields of dermatology and venereology for GNRS events and other academy activities.',
      blogs_2_paragraph: 'Visit regularly for updates on the latest GNRS developments.',
      blogs_search: 'Search for topics or terms:',
      search: 'Search',
      read_more: 'Read more',
      download: 'Download PDF',
      footer_street: '22a Tashkenti Street, Tbilisi',
      footer_about_title: 'About GNRS',
      footer_about: 'The Georgian Nail Research Society is a non-profit organization, dedicated to advancing the study and understanding of nail health, disorders, and care.'
    }
  },
  geo: {
    translation: {
      about: 'შესახებ',
      nav_academy: 'აკადემია',
      nav_members: 'წევრები',
      nav_statutes: 'წესდება',
      nav_reports: 'წლიური ანგარიშები',
      nav_events: 'მოვლენები',
      nav_blogs: 'სამეცნიერო ბლოგები',
      nav_patients: 'პაციენტები',
      home_title: 'GNRS ისტორია',
      home_1_paragraph: 'GNRS არის არაკომერციული ორგანიზაცია, რომელიც დაარსდა 2023 წელს და ეძღვნება ფრჩხილების ჯანმრთელობის, დარღვევებისა და მოვლის შესწავლასა და განვითარებას.',
      home_2_paragraph: 'ჩვენი მისიაა ხელი შევუწყოთ კვლევის, განათლებისა და ცნობიერების გაზრდას ფრჩხილების მეცნიერების სფეროში, ჯანდაცვის პროფესიონალებთან, მკვლევარებთან და საზოგადოებასთან თანამშრომლობით. ინოვაციების ხელშეწყობისა და ცოდნის გაზიარების გზით, ჩვენ მიზნად ვისახავთ გავაუმჯობესოთ ფრჩხილების მოვლის პრაქტიკა და ხელი შევუწყოთ საქართველოს მოსახლეობის საერთო კეთილდღეობას.',
      values: 'ჩვენი ღირებულებები',
      collaborative_title: 'თანამშრომლობითი',
      collaborative_description: 'ჩვენ გვჯერა ერთობლივი მუშაობის, ერთმანეთთან ცოდნისა და გამოცდილების გაზიარების, ყველას სასარგებლოდ.',
      progressive_title: 'პროგრესული',
      progressive_description: 'ჩვენ ყოველთვის ვცდილობთ გაუმჯობესებას, ვამხნევებთ ერთმანეთს, რომ შევცვალოთ საქმის კეთება უკეთესობისკენ.',
      inclusive_title: 'ინკლუზიური',
      inclusive_description: 'ჩვენ ვამტკიცებთ, რომ ყველას აქვს რაიმე წვლილი შეტანის საშვალება, ვრევთ რაც შეიძლება მეტ ადამიანს, რადგანაც მაქსიმალურად გავზარდოთ გავლენა.',
      trusted_title: 'სანდო',
      trusted_description: 'ჩვენ ვართ პროფესიონალები, ვაზიარებთ მხოლოდ მეცნიერულად საფუძვლიან მიღწევებს, რათა ჩვენმა წევრებმა წინსვლა თავდაჯერებულად შეძლონ.',
      members: 'გამგეობის წევრები',
      events_paragraph: 'GNRS-ის ღონისძიებები შესანიშნავ შესაძლებლობას იძლევა, რომ გამოსცადოთ გამოჩენილი სამეცნიერო ამბები ამ სფეროში საუკეთესო მომხსენებლებისგან. კავშირები ასევე GNRS-ის ღონისძიებების დიდი ნაწილია; მოდით და შეხვდით ექიმებს, პროფესორებს და ინდუსტრიის ლიდერებს მთელი მსოფლიოდან.',
      events_latest: 'უახლესი GNRS',
      events_click: 'ყუთზე დააწკაპუნეთ სანახავად',
      events_highlit: 'მაჩვენებლების',
      events_previous: 'წინა',  
      events_symposium: 'სიმპოზიუმი',
      events_congress: 'კონგრესი',
      blogs_1_paragraph: 'GNRS-ის სამეცნიერო ბლოგი შეიცავს სიახლეებისა და სტატიების არჩევანს, რომლებიც მომზადებულია დერმატოლოგიისა და ვენეროლოგიის სხვადასხვა დარგის ექსპერტების მიერ GNRS ღონისძიებებისა და აკადემიის სხვა საქმიანობისთვის.',
      blogs_2_paragraph: 'რეგულარულად ეწვიეთ GNRS-ის უახლესი მოვლენების განახლებებს.',
      blogs_search: 'მოძებნეთ თემები ან ტერმინები:',
      search: 'ძიება',
      read_more: 'დაწვრილებით',
      download: 'გადმოწერე PDF',
      footer_street: 'ტაშკენტის 22ა, თბილისი',
      footer_about_title: 'GNRS-ის შესახებ',
      footer_about: 'GNRS არის არაკომერციული ორგანიზაცია, რომელიც ეძღვნება ფრჩხილების ჯანმრთელობის, დარღვევებისა და მოვლის შესწავლასა და განვითარებას.'
    }
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
