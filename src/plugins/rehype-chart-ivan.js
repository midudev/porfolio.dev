import { visit } from 'unist-util-visit';

export function rehypeChart() {
    return (tree, file) => {
        console.log('hola');
        visit(tree, (node) => {
            console.log(node);
            if (
                node.tagName === 'pre' &&
                node.children.length === 1 &&
                node.children[0].tagName === 'code'
            ) {
                console.log('hola2');
                const childNode = node.children[0];
                
                // Debugging: log the original node
                console.log('Found chart block:', childNode.children[0].value);
                
                // Parse the chart data
                if (childNode.children.length === 1 && childNode.children[0].type === 'text') {
                    try {
                        const chartData = JSON.parse(childNode.children[0].value);
                        const uuid = crypto.randomBytes(16).toString('hex');
                        chartData.chart.id = uuid;
                        
                        // Transform the node
                        node.type = 'element';
                        node.tagName = 'div';
                        node.properties = {
                            id: uuid,
                            className: ['chart-container'],
                            'data-chart': JSON.stringify(chartData),
                        };
                        node.children = [];
                        
                        console.log('Transformed node:', node); // Debugging
                    } catch (err) {
                        console.error('Error parsing chart JSON:', err);
                    }
                }
            }
        }
    );
};
}
