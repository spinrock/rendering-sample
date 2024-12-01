import { ReduxProvider } from '@/app/providers';
import { CommonPageTemplate } from '@/shared/ui';
import '@/app/styles/globals.css';

type RootLayoutProps = React.PropsWithChildren;

const RootLayout: React.FC<RootLayoutProps> = ({ children }: RootLayoutProps) => (
  <html lang="ja">
    <body>
      <ReduxProvider>
        <CommonPageTemplate>{children}</CommonPageTemplate>
      </ReduxProvider>
    </body>
  </html>
)

export default RootLayout;
