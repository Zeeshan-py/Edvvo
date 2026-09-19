import { RoadmapExplorer } from '@/components/studio/RoadmapExplorer';
import { legacyRoadmaps } from '@/data/legacyRoadmaps';
import { newRoadmaps } from '@/data/newRoadmaps';
import { professionalRoadmaps } from '@/data/professionalRoadmaps';
import { roadmapCatalog } from '@/data/roadmapCatalog';

export const roadmaps = [...professionalRoadmaps, ...legacyRoadmaps, ...newRoadmaps].map(roadmap => ({
  ...roadmap, ...roadmapCatalog.find(item => item.id === roadmap.id)!,
}));
export const RoadmapsPage = () => <RoadmapExplorer roadmaps={roadmaps} />;
