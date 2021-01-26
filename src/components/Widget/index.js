import styled from 'styled-components';

const Widget = styled.div`
    margin-top:24px;
    margin-bottom:24px;
    background-color: rgba(18, 11, 23, 0.85);
    border-radius:4px;
    overflow: hidden;

    h1, h2, h3{
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0;
    }

    p {
        font-family: Lucida Sans Typewriter,Lucida Console,monaco,Bitstream Vera Sans Mono,monospace; 
        font-size: 14px;
        font-weight: 400;
    line-height: 1;
    }
`;

Widget.Header = styled.header`
    display:flex;
    border-radius: 5px 5px 0px 0px;
    justify-content: flex-start;
    padding: 18px 32px;
    background-color: ${({ theme }) => theme.colors.primary};

    @keyframes neon {
     0%,
     100% {
        text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
        color: #FED128;
    }
    50% {
        text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
        color: #806914;
    }
}

    h1 {
        animation: neon 4s ease infinite;
        -moz-animation: neon 4s ease infinite;
        -webkit-animation: neon 4s ease infinite;
        font-size: 45px;
        font-family:Stencil Std, fantasy;
        color: #FA1C16;
        text-shadow: 1px 1px 2px #5AACFB;
    }

    * {
        margin: 0;
    }
`;

Widget.Content = styled.header`
    padding: 24px 32px 32px 32px;

    & > *:first-child{
        margin-top:0;
    }
    & > *:last-child{
        margin-top:0;
    }

    ul{
        list-style:none;
        padding:0;
    }
`;

export default Widget;
