import { visit } from 'unist-util-visit';

export function rehypeChart() {
    return (tree) => {
        visit(tree, 'element', (node) => {
            // The structure my markdown gets parsed as is <pre><code>...</code></pre>
            // and because of styling I want to replace the <pre><code> with just one <div>
            if (
                node.tagName === 'pre' &&
                node.children.length === 1 &&
                node.children[0].tagName === 'code'
            ) {
                const childNode = node.children[0];

                // check if the child node is a code block with the language set to 'chart'
                if (
                    childNode.tagName === 'code' &&
                    childNode.properties.className &&
                    childNode.properties.className.length > 0 &&
                    childNode.properties.className[0] === 'language-chart'
                ) {
                    // Check if the code block contains only text
                    if (childNode.children.length !== 1 || childNode.children[0].type !== 'text') {
                        throw new Error('Invalid chart code block');
                    }

                    // Parse the chart's data from the code block
                    var chartData = JSON.parse(childNode.children[0].value);
                    // Generate a unique ID for the chart, this will let us reference the chart later for dark mode
                    const uuid = crypto.randomBytes(16).toString('hex');
                    chartData.chart.id = uuid

                    // Replace the node with a div element with the chart data attached
                    node.type = 'element';
                    node.tagName = 'div';
                    node.properties = {
                        id: uuid,
                        className: ['chart-container'],
                        'data-chart': JSON.stringify(chartData)
                    };
                    node.children = [];
                }
            }
        });
    };
}