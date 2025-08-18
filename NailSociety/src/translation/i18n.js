import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const resources = {
  eng: {
    translation: {
      about: 'About',
      nav_society: 'Society',
      nav_members: 'Members',
      nav_statutes: 'Statutes',
      nav_reports: 'Annual reports',
      nav_events: 'Events',
      nav_blogs: 'Scientific blogs',
      nav_patients: 'Patients',
      home_title: '',
      home_1_paragraph: 'The Nail Research Society of Georgia is a non-profit organization founded in 2022 by Georgian dermatologists. Its aim is to unite specialists interested in the study of nail biology and diseases.',
      home_2_paragraph: '',
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
      events_paragraph: 'GNRS events provide a unique platform to explore high-level scientific presentations delivered by renowned specialists in the field. These meetings also offer an excellent environment for professional networking—bringing together physicians, researchers, and industry experts from across the globe.',
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
      about: 'ჩვენს შესახებ',
      nav_society: 'საზოგადოება',
      nav_members: 'წევრები',
      nav_statutes: 'წესდება',
      nav_reports: 'წლიური ანგარიშები',
      nav_events: 'მოვლენები',
      nav_blogs: 'სამეცნიერო ბლოგები',
      nav_patients: 'პაციენტები',
      home_title: '',
      home_1_paragraph: 'საქართველოს ფრჩხილის კვლევის საზოგადოება არის არაკომერციული ორგანიზაცია, რომელიც დაარსდა 2022 წელს ქართველი დერმატოლოგების მიერ და მიზნად ისახავს ფრჩხილის ბიოლოგიისა და დაავდებების შესწავლით დაინტერესებულ სპეციალისტთა გაერთიანებას.',
      home_2_paragraph: '',
      values: 'ჩვენი ღირებულებები',
      collaborative_title: 'თანამშრომლობა',
      collaborative_description: 'ჩვენ ვიზიარებთ კოლაბორაციის, გამოცდილებისა და ცოდნის გაზიარების პრინციპებს პროფესიულ საქმიანობაში.',
      progressive_title: 'პროგრესი',
      progressive_description: 'ჩვენ ვესწრაფვით წინსვლას, ცოდნის გაღრმავებას, ახალი შესაძლებლობების ათვისებას, პრაქტიკული საქმიანობის ხარისხის გაუმჯობესებას.',
      inclusive_title: 'თანასწორობა',
      inclusive_description: 'თითოულ ჩვენთაგანს შეუძლია შეიტანოს წვლილი საზოგადოების საქმიანობაში. ჩვენ გვჯერა, რომ რაც შეიძლება მეტი ადამიანის ჩართულობა განაპირობებს მაქსიმალურად ეფექტურ შედეგს.',
      trusted_title: 'სანდოობა',
      trusted_description: 'ჩვენ პროფესიონალები ვართ და მხოლოდ სამეცნიერო თვალსაზრისით დასაბუთებულ მიღწევებს ვუზიარებთ ერთმანეთს, რათა ჩვენს წევრებს თავდაჯერებულად შეეძლოთ წინსვლა.',
      members: 'გამგეობის წევრები',
      events_paragraph: 'GNRS-ის ღონისძიებები უნიკალურ პლატფორმას წარმოადგენს დარგის ცნობილი სპეციალისტების მიერ წარმოდგენილ მაღალი დონის სამეცნიერო პრეზენტაციების შესასწავლად. ეს შეხვედრები ასევე შესანიშნავ გარემოს ქმნის პროფესიული ქსელური ურთიერთობებისთვის — აერთიანებს ექიმებს, მკვლევარებსა და ინდუსტრიის ექსპერტებს ჩვენს ქვეყანაში',
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
