import { Chip } from '@mui/material';
import size from '../../assets/size.svg';

export default function RepoCard(repo) {
  return (
    <div className="whitespace-nowrap">
      <div className="flex items-center gap-3">
        <h3 className="py-2 text-xl font-normal text-[#181D27]">{repo.name}</h3>
        <Chip
          label={repo.visibility}
          size="small"
          sx={{
            fontSize: '0.75rem',
            backgroundColor: '#EFF8FF',
            width: 60,
            color: '#175CD3',
            fill: 'green',
            borderWidth: '1px',
            borderColor: '#B2DDFF',
            borderStyle: 'solid',
          }}
        />
      </div>

      <div className="flex gap-9">
        <span className="flex items-center gap-1 text-sm text-[#414651]">
          {repo.type}
          <span className="ml-1 inline-block h-2 w-2 rounded-full bg-blue-500"></span>
        </span>
        <span className="flex min-w-fit items-center gap-2 text-sm text-[#414651]">
          <img src={size} className="h-4 w-4" />
          {repo.size}
        </span>
        <span className="text-sm text-[#414651]">Updated {repo.updatedAt}</span>
      </div>
    </div>
  );
}
