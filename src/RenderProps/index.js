
import MouseOver from './MouseOver'
import Button from './ButtonDisable'
  function RenderProps(){
    const app=['quet nha', 'lau nha', 'giat quan ao']
    return (
      <div style={{ height: '100%' }}>
        <MouseOver contentH1={'Anh yeu em rat nhieu'}></MouseOver>
        <MouseOver contentH1={'The mouse 1 position is'}></MouseOver>
        <MouseOver contentH1={'The mouse 2 position is'}></MouseOver>
        <MouseOver contentH1={'The mouse 3 position is'}></MouseOver>
        <Button content='Test' data={app}/>
      </div>
    )
  }
export default RenderProps