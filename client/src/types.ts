export type ProjectType = {
  _id: string
  id: number,
  location: string,
  sqFoot: number,
  name: string,
  pics: {
    full: string,
    previews: string[],
    slider: string[]
  },
  texts: string[]
}

export interface IPageProps {
  projects: ProjectType[] | null
}
