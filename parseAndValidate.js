import Joi from 'joi'

const patterns = {
    kebabCase: /(?:[a-z]+-?)+(?:[a-z]+)/,
    semVer: /[0-9]+\.[0-9]+\.[0-9]+/,
    moduleType: /commonjs|module/,
}

const schema = Joi.object({
    name: Joi.string().pattern(patterns.kebabCase).default('index'),
    version: Joi.string().pattern(patterns.semVer).default('0.1.0'),
    type: Joi.string().pattern(patterns.moduleType).default('commonjs'),
})

export default obj => {
    const { error, value } = schema.validate(obj)
    if (error) throw error
    return value
}