import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Check() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/Check.loader.js",
    dataUrl: "build/Check.data",
    frameworkUrl: "build/Check.framework.js",
    codeUrl: "build/Check.wasm",
  });

  return (
    <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} />
  );
}
export default Check;