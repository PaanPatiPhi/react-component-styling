// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import errorIcon from '../assets/icon/erroricon.svg';
import warningIcon from '../assets/icon/warningicon.svg';
import infoIcon from '../assets/icon/infoicon.svg';
import successIcon from '../assets/icon/successicon.svg';


function Alert(props) {
    let bgColor = "#F9EBC8";
    let AlerIcon = infoIcon;
    const severity = props.severity || props.type || 'info';

    if (severity === 'error') {
        bgColor = "#F9C8C8";
        AlerIcon = errorIcon;
    } else if (severity === 'warning') {
        bgColor = "#F9D9C8";
        AlerIcon = warningIcon;
    } else if (severity === 'success') {
        bgColor = "#CEF7CD";
        AlerIcon = successIcon;
    }
    return (
        <div
            css={css`
                margin: 10px;
                display: flex;
                align-items: center;
                justify-content: start;
                padding-left: 20px;
                width: 650px;
                height: 76px;
                font-family: "Kanit", sans-serif;
                font-weight: 700;
                font-size: 20px;
                color: #444444;
                border-radius: 10px;
                background-color: ${bgColor};
             `}
        >
            <img src={AlerIcon} alt={`${severity} icon`} css={css`width:36px;height:36px;margin-right:16px;`} />
            <div css={css`font-family: "Kanit", sans-serif;`}>{props.message}</div>
        </div>
    );
}

export default Alert;