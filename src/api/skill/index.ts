import axios from '@/api/index';

export const loadAllSkills = async () => {
  return await axios.get('/skills').then((r) => r.data);
};

export const loadSkillById = async (id: number) => {
  return await axios.get(`/skills/${id}`).then((r) => r.data);
};
