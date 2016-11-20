var _ = require('lodash'),
	schema = require('./1.0.2.json');

// Merge common schema properties with the resources
_.forOwn(schema.resources, function(resource, resourceName) {
	resource.types = _.merge(resource.types, schema.types);
});

module.exports = {
	types: schema.types,
	resources: schema.resources
}
