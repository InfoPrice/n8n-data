import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class CredentialsTest implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CredentialsTest',
		name: 'credentialsTest',
		icon: 'fa:trash',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		description: 'Node used to test if credentials appear when node has no parameters',
		defaults: {
			name: 'CredentialsTest',
			color: '#ea4b71',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'plivoApi',
				required: true,
			},
		],
		properties: [],
	};
}
