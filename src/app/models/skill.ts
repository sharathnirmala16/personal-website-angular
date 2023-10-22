export class Skill {
  skillName!: string;
  skillRating!: number;
  skillDescription!: string;
  subSkills!: Skill[];

  constructor(
    name: string,
    rating: number,
    description: string,
    subSkills: Skill[]
  ) {
    this.skillName = name;
    this.skillRating = rating;
    this.skillDescription = description;
    this.subSkills = subSkills;
  }
}
