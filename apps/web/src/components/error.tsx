import styled from '@emotion/styled';

export const Error = () => {
  return (
    <Div>
      <h1>Oh no! There was a error!</h1>
    </Div>
  );
}

const Div = styled.div`
  background-image: url(https://www.themebeta.com/media/cache/728/files/chrome/images/201601/24/6ca43dd5627f28a87ceed41fa92302df.png);
  background-repeat: no-repeat;
  text-align: center;
  color: white;
  height: 540px;
  width: 830px;
`;