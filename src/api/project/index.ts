import axios from '@/api/index';

export const loadAllProjects = async () => {
  return await axios.get('/projects').then((r) => r.data);
};

export const loadProjectById = async (id: number) => {
  return await axios.get(`/projects/${id}`).then((r) => r.data);
};
