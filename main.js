import parseAndValidate from './parseAndValidate.js'

export default userOptions => {
    const packageFile = parseAndValidate(userOptions)
    return {
        name: 'create-package.json',
        generateBundle(options, bundle) {
            const fileName = 'package.json'
            const source = JSON.stringify(packageFile, null, 4)
            bundle[fileName] = { fileName, source, type: 'asset' }
        },
    }
}
