/**
 * @type {import('./App/node_modules/electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const electronBuilderConfig = {
    appId: "com.netpad.app",
    productName: "NetPad",
    copyright: "Copyright © 2020 Tareq Imbasher",
    buildVersion: "0.1.0-alpha.1",
    compression: "maximum",
    directories: {
        output: "../../../bin/Desktop"
    },
    extraResources: [
        {
            from: "./bin",
            to: "bin",
            filter: [
                "**/*"
            ]
        },
        // {
        //     from: "../../../res",
        //     to: "bin/res",
        //     filter: [
        //         "**/*"
        //     ]
        // },
    ],
    files: [
        {
            from: "./ElectronHostHook/node_modules",
            to: "ElectronHostHook/node_modules",
            filter: [
                "**/*"
            ]
        },
        "**/*"
    ],
    // pacman: {
    //     afterInstall: "bin/res/install-mime.sh"
    // },
    linux: {
        artifactName: "${name}-${version}-${arch}-${os}.${ext}",
        icon: "../../../wwwroot/logo/circle/",
        category: "Development;IDE;Building;Database;TextEditor;",
        desktop: {
            Type: "Application",
            Name: "NetPad",
            Categories: "Development;IDE;Building;Database;TextEditor;",
            StartupNotify: "true",
            StartupWMClass: "netpad",
            Encoding: "UTF-8",
            MimeType: "application/x-netpad"
        },
        target: [
            {
                target: "pacman",
            },
            {
                target: "AppImage",
            },
            {
                target: "deb",
                depends: ["libnotify4", "libxtst6", "libnss3"]
            },
            {
                target: "rpm",
            },
            {
                target: "zip",
            },
        ]
    },
    nsis: {
        oneClick: false,
        allowToChangeInstallationDirectory: true
    },
    win: {
        artifactName: "${name}-${version}-${arch}-${os}.${ext}",
        icon: "../../../wwwroot/favicon.ico",
        target: [
            {
                target: "nsis"
            },
            {
                target: "zip"
            }

        ]
    },
    mac: {
        artifactName: "${name}-${version}-${arch}-${os}.${ext}",
        category: "public.app-category.developer-tools",
        icon: "../../../wwwroot/logo/circle/logo.icns",
        darkModeSupport: true,
        target: [
            {
                target: "zip"
            }
        ]
    }
}

const electronNetConfig = {
    name: "netpad",
    description: "A cross-platform C# editor and playground.",
    executable: "NetPad.Apps.App",
    author: {
        name: "Tareq Imbasher",
        email: "tareq@meccasoft.com"
    },
    license: "MIT",
    repository: {
        type: "git",
        url: "https://github.com/tareqimbasher/NetPad"
    },
    homepage: "https://github.com/tareqimbasher/NetPad#readme",
    splashscreen: {
        imageFile: "./wwwroot/logo/square/256x256.png"
    },
    singleInstance: true,
    electronPort: 57931,
    build: electronBuilderConfig
};

module.exports = electronNetConfig;
