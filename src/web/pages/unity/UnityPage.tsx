import * as React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";
import { Center, Card, Tabs, Space, Group, Stack } from '@mantine/core'

const UnityPage = ()=>{
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "Build/game.loader.js",
    dataUrl: "Build/game.data.unityweb",
    frameworkUrl: "Build/game.framework.js.unityweb",
    codeUrl: "Build/game.wasm.unityweb",
  });

  return (
    <Stack className="h-full w-full overflow-hidden">
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      />
    </Stack>
  );
}

export default UnityPage;
export const Component = UnityPage