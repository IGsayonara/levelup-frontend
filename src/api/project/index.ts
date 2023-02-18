import axios from '@/api/index';

export const loadAllProjects = async (next?: string) => {
  return await axios.get(next || '/projects').then((r) => r.data);
};

export const loadSearchedProjects = async (title: string) => {
  return await axios
    .get('/projects', {
      params: {
        'filter.title': `$ilike:${title}`,
      },
    })
    .then((r) => r.data);
};

export const loadProjectById = async (id: number) => {
  return await axios.get(`/projects/${id}`).then((r) => r.data);
};
