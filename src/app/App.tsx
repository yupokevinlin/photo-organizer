import { hot } from "react-hot-loader/root";
import React from "react";
import configureStore from "../state/store";
import { Provider } from "react-redux";
import {createStyles, Theme, useTheme} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";

export type AppProps = AppDataProps & AppStyleProps & AppEventProps;

export interface AppDataProps {

}

export interface AppStyleProps {

}

export interface AppEventProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    app: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
    },
  }),
);

export namespace AppStore {
  export const store = configureStore();
}

const App: React.FC<AppProps> = (props) => {
  const classes = useStyles();

  const {

  } = props;

  return (
    <Provider store={AppStore.store}>
      <div className={classes.app}>

      </div>
    </Provider>
  );
};

export default hot(App);
