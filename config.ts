// import token from './public.pem';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    title: 'Clowns Launcher',
};

export const api = {
    ws: process.env["WS_DOMAIN"],
    web: process.env["HTTP_DOMAIN"],
    // extraToken: token,
};
