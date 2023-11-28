import View from '@/app/Ui/dashborad/view/page';
import leftPage from '@/app/dashborad/left/page';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#171717]" >

        <div className='max-w-[78rem] mx-auto'>
          <div className='gap-4 md:mt-5 flex-col md:flex-row'>
            <leftPage />
            {children}
            <View />
          </div>
        </div>






      </body>
    </html>
  )
}
