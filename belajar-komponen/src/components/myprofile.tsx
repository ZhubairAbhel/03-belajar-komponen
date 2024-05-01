import { getImageUrlV2 } from '@/utils/utils';

function MyAvatar({ person, size }: any) {
  return (
    <img
      className="avatar"
      src={getImageUrlV2(person, 'b')}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export function MyProfile() {
  return (
    <MyAvatar
      size={200}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}