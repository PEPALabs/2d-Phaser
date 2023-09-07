import * as React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

function sampleUnity() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "static/Build/game.loader.js",
    dataUrl: "static/Build/game.data.unityweb",
    frameworkUrl: "static/Build/game.framework.js",
    codeUrl: "static/Build/game.wasm.unityweb",
  });

  return (
    <React.Fragment>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      />
    </React.Fragment>
  );
}