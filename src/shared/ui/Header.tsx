import React from 'react';

type Props = {
  title: string
}

const Header: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className="h-16 w-full bg-slate-200 shadow-md">
      <p className="text-2xl leading-[64px] pl-4" data-testid="header-title">
        {title}
      </p>
    </div>
  )
}

export default Header
