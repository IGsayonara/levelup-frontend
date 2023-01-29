import axios from '@/api/index';

export const getAllProjects = async () => {
  return await axios.get('/projects').then((r) => r.data);
};

export const getProjectById = async (id: number) => {
  return await axios.get(`/projects/${id}`).then((r) => r.data);
};
