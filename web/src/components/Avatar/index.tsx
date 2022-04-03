import classNames from 'classnames';
import  { ReactComponent as EmptyAvatarImage } from '../../img/empty-avatar.svg';

type Size = 'small' | 'medium' | 'large' | 'xlarge';

type AvatarProps = {
  size?: Size;
  src?: string;
  alt?: string;
};

const sizes: Record<Size, string> = {
  small: 'w-10 h-10',
  medium: 'w-12 h-12',
  large: 'w-14 h-14',
  xlarge: 'w-32 h-32'
};

const EmptyAvatar = ({ size = 'medium' }: Pick<AvatarProps, 'size'>) => (
  <span
    data-testid="empty-avatar"
    className={classNames(
      'inline-block overflow-hidden bg-gray-100 rounded-full',
      sizes[size]
    )}
  >
    <EmptyAvatarImage />
  </span>
);

export default function Avatar({ size = 'medium', src, alt }: AvatarProps) {
  if (!src) {
    return <EmptyAvatar size={size} />;
  }

  return (
    <img
      className={classNames('inline-block rounded-full', sizes[size])}
      src={src}
      alt={alt}
    />
  );
}
