import articlesData from '@/data/ArticlesData.json'
import certificationsData from '@/data/CertificationsData.json'
import competencesData from '@/data/CompetencesData.json'
import experiencesData from '@/data/ExperiencesData.json'
import formationData from '@/data/FormationData.json'
import navigationData from '@/data/NavBarData.json'
import projectsData from '@/data/ProjetsData.json'
import type { ContentProvider, PortfolioContent } from '@/types/content'

const localContent: PortfolioContent = {
  profile: {
    name: 'Jessem Ettaghouti',
    title: 'Ingénieur Logiciel',
    bio: "Je suis Ingénieur Logiciel full stack. J'aime travailler sur des projets qui mêlent IA et surtout du développement full stack. Toujours à la recherche de nouvelles idées et de nouveaux challenges, je m'efforce d'apprendre et de créer des solutions maintenables, efficaces et performantes.",
    specialties: ['Full Stack', 'DevOps', 'IA'],
    email: 'jessemettaghouti@gmail.com',
    phone: '+33 6 71 09 01 48',
    phoneHref: 'tel:+33671090148',
    links: [
      { label: 'GitHub', url: 'https://github.com/jess2304' },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jessem-ettaghouti-38142320a/',
      },
      { label: 'Facebook', url: 'https://www.facebook.com/jessem.ettaghouti.9' },
    ],
    portrait: {
      src: `${import.meta.env.BASE_URL}assets/profile_photo.jpg`,
      alt: 'Portrait de Jessem Ettaghouti',
    },
  },
  experiences: experiencesData.map((experience, index) => ({
    id: `experience-${index + 1}`,
    title: experience.title,
    date: experience.date,
    company: experience.company,
    companyUrl: experience.linkCompany,
    description: experience.description,
    missions: experience.missions.map((mission, missionIndex) => ({
      id: `experience-${index + 1}-mission-${missionIndex + 1}`,
      ...('client' in mission ? { client: mission.client } : {}),
      description: mission.description,
      technologies: [...mission.technologies],
    })),
  })),
  skillGroups: competencesData.map((group, index) => ({
    id: `skills-${index + 1}`,
    category: group.categorie,
    skills: group.competences.map((name) => ({ name })),
  })),
  projects: projectsData.map((project, index) => ({
    id: `project-${index + 1}`,
    title: project.titre,
    description: project.description,
    githubUrl: project.lien,
  })),
  education: formationData.map((education, index) => ({
    id: `education-${index + 1}`,
    degree: education.diplome,
    institution: education.nom,
    subjects: [...education.matieres],
  })),
  certifications: certificationsData.map((certification, index) => ({
    id: `certification-${index + 1}`,
    name: certification.name,
    organizer: certification.organizer,
    date: certification.date,
    url: certification.url,
  })),
  publications: articlesData.map((publication, index) => ({
    id: `publication-${index + 1}`,
    authors: publication.authors,
    type: publication.type,
    title: publication.description,
    year: publication.annee,
    url: publication.lien,
  })),
  navigation: navigationData.map((item) => ({
    href: item.id,
    label: item.name,
  })),
}

/** Local content is available immediately, without a loading screen or request. */
export function getContent(): PortfolioContent {
  return localContent
}

/** Supply an API/configuration adapter here when the content moves off-repository. */
export async function loadContent(
  provider: ContentProvider = getContent,
): Promise<PortfolioContent> {
  return provider()
}
