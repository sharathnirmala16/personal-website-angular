export class Work {
  title!: string;
  description!: string;
  skills!: string[];
  url!: string;
  location!: string;
  datetime!: string;
  imageUrl!: string;

  constructor(
    title: string,
    description: string,
    skills: string[],
    url: string = '',
    location: string = '',
    datetime: string = '',
    imageUrl: string = ''
  ) {
    this.title = title;
    this.description = description;
    this.skills = skills;
    this.url = url;
    this.location = location;
    this.datetime = datetime;
    this.imageUrl = imageUrl;
  }
}
